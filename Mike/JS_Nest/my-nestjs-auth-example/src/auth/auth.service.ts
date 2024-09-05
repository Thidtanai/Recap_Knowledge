import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/user/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    // use await for wait comparing password
    const user = await this.userService.findByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      // convert user to object
      const result = user.toObject();
      return {
        email: result.email,
        userId: result._id,
      };
    }
    return null;
  }

  async login(user: any) {
    // the data want to encrypt to Jwt
    const payload = { email: user.email, sub: user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async googleLogin(req): Promise<any> {
    if (!req.user) {
      throw new Error('Google login failed: No user information received.');
    }

    // get user data from google
    const { email, name, picture, googleId } = req.user;
    let user = await this.userModel.findOne({ email });

    // create new user if user not registered
    if (!user) {
      user = new this.userModel({
        email,
        name,
        picture,
        googleId,
      });
      await user.save();
    }

    const payload = { email: user.email };
    
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
