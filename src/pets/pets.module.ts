import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { PetsController } from './pets.controller';
import { Pet } from './pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],  
  providers: [PetsService, PetsResolver],
  controllers: [PetsController],
})
export class PetsModule {}
