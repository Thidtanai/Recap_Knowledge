import { Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { GoogleAuthGuard } from './google-auth.guard';
import { Response } from 'express';

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

  // Google login page will popup
  @UseGuards(GoogleAuthGuard)
  @Get('google')
  async googleAuth(@Request() req) {
    // Initiates the Google OAuth process
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  async googleAuthRedirect(
    @Request() req,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.googleLogin(req);

    // save to cookie
    res.cookie('access_token', accessToken, {
      httpOnly: true,
    });
    return { message: 'Login successful' };
  }

  @Get('logout')
  async logout(@Request() req, @Res() res: Response) {
    res.clearCookie('access_token', {
      httpOnly: true,
    });
    return res.json({ message: 'Successfully logged out' });
  }
}
