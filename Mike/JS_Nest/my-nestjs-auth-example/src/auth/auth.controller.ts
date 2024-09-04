import { Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  // passthrough for we want to manage response and want nest to handle it too.
  async login(@Request() req, @Res({ passthrough: true }) res) {
    const { accessToken } = await this.authService.login(req.user);
    // old: return token
    // return { accessToken };

    // new: save to cookie
    res.cookie('access_token', accessToken, {
      // cookie will only pulled by serverside.
      httpOnly: true,
    });
    return {
      message: 'Login success',
    };
  }
}
