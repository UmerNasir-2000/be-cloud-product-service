import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfiguration from './config/app.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [appConfiguration],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
