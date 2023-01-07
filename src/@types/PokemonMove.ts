import { NamedAPIResource } from './NamedAPIResource';
import { PokemonMoveVersion } from './PokemonMoveVersion';

export interface PokemonMove {
  /** The move the Pokémon can learn */
  move: NamedAPIResource;
  /** The details of the version in which the Pokémon can learn the move */
  version_group_details: PokemonMoveVersion[];
}