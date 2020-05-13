import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { plainToClass } from "class-transformer";

import { Place } from "../entity/Place";
import { PlaceInput } from "../graphql-types/PlaceInput";

@Resolver(() => Place)
export class PlaceResolver {
  // Returns a single place based on it's ID, or undefined.
  @Query(() => Place, { nullable: true })
  async place(@Arg("id") id: number): Promise<Place | undefined> {
    return await Place.findOne(id);
  }

  // Returns a list of all places, or an empty array.
  @Query(() => [Place], {
    description: "Get all the places from around the world ",
  })
  async places(): Promise<Place[]> {
    const places = await Place.find();
    return places;
  }
  // Adds and returns a new place using PlaceInput parameters.
  @Mutation(() => Place)
  async createPlace(@Arg("place") placeInput: PlaceInput): Promise<Place> {
    const place = plainToClass(Place, {
      description: placeInput.description,
      title: placeInput.title,
      imageUrl: placeInput.imageUrl,
      creationDate: new Date(),
    });
    const newPlace = await Place.create({ ...place }).save();
    return newPlace;
  }
}
