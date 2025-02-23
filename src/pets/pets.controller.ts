import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  findAll(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Pet | null> {
    return this.petsService.findOne(id);
  }

  @Post()
  create(@Body() createPetDto: { name: string; type: string }): Promise<Pet> {
    return this.petsService.create(createPetDto.name, createPetDto.type);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updatePetDto: { name: string; type: string },
  ): Promise<Pet | null> {
    return this.petsService.update(id, updatePetDto.name, updatePetDto.type);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.petsService.remove(id);
  }
}