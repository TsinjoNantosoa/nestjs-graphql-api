import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';

@Resolver(() => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Query(() => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Query(() => Pet, { nullable: true })
  pet(@Args('id', { type: () => Int }) id: number): Promise<Pet | null> {
    return this.petsService.findOne(id);
  }

  @Mutation(() => Pet)
  createPet(
    @Args('name') name: string,
    @Args('type') type: string,
  ): Promise<Pet> {
    return this.petsService.create(name, type);
  }

  @Mutation(() => Pet, { nullable: true })
  updatePet(
    @Args('id', { type: () => Int }) id: number,
    @Args('name') name: string,
    @Args('type') type: string,
  ): Promise<Pet | null> {
    return this.petsService.update(id, name, type);
  }

  @Mutation(() => Boolean)
  removePet(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.petsService.remove(id);
  }
}