import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 有効期限切れをエラーにする
      ignoreExpiration: false,
      secretOrKey: 'secretKey123',
    });
  }

  // 処理の中で自動で呼び出し、validateであれば
  async validate(payload: { id: string; name: string }): Promise<User> {
    const { id, name } = payload;
    const user = await this.userRepository.findOne({ id, name });

    if (user) return user;
    throw new UnauthorizedException();
  }
}
