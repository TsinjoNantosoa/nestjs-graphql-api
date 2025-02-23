import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private petsRepository: Repository<Pet>,
  ) {}

  findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }

  findOne(id: number): Promise<Pet | null> {
    return this.petsRepository.findOneBy({ id });
  }

  create(name: string, type: string): Promise<Pet> {
    const pet = this.petsRepository.create({ name, type });
    return this.petsRepository.save(pet);
  }

  async update(id: number, name: string, type: string): Promise<Pet | null> {
    const pet = await this.petsRepository.findOneBy({ id });
    if (!pet) return null;
    pet.name = name;
    pet.type = type;
    return this.petsRepository.save(pet);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.petsRepository.delete(id);
    return result.affected === 0;
  }
}