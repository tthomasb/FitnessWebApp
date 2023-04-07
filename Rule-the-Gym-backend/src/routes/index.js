import { exampleCreateItemRoute } from "./examples/exampleCreateItem";
import { exampleDeleteItemRoute } from "./examples/exampleDeleteItem";
import { exampleGetAllItemsRoute } from "./examples/exampleGetAllItems";
import { exampleGetItemRoute } from "./examples/exampleGetItemById";
import { exampleGetUserItemsRoute } from "./examples/exampleGetUserItems";
import { exampleUpdateItemRoute } from "./examples/exampleUpdateItem";
import { exerciseCreate } from "./training/exercise/exerciseCreate";
import { exerciseDelete } from "./training/exercise/exerciseDelete";
import { exerciseEdit } from "./training/exercise/exerciseEdit";
import { exerciseGetAll } from "./training/exercise/exerciseGetAll";
import { exerciseGetAllByMuscle } from "./training/exercise/exerciseGetAllByMuscle";
import { exerciseById } from "./training/exercise/exerciseGetById";
import { workoutAddExercise } from "./training/workout/workoutAddExercise";
import { workoutCreate } from "./training/workout/workoutCreate";
import { workoutDelete } from "./training/workout/workoutDelete";
import { workoutDeleteExercise } from "./training/workout/workoutDeleteExercise";
import { workoutEdit } from "./training/workout/workoutEdit";
import { workoutEditExercise } from "./training/workout/workoutEditExercise";
import { workoutExerciseAddHistorySet } from "./training/workout/workoutExerciseAddHistorySet";
import { workoutExerciseAddSet } from "./training/workout/workoutExerciseAddSet";
import { workoutExerciseDeleteHistorySet } from "./training/workout/workoutExerciseDeleteHistorySet";
import { workoutExerciseDeleteSet } from "./training/workout/workoutExerciseDeleteSet";
import { workoutExerciseEditHistorySet } from "./training/workout/workoutExerciseEditHistorySet";
import { workoutExerciseEditSet } from "./training/workout/workoutExerciseEditSet";
import { workoutExerciseGetHistorySets } from "./training/workout/workoutExerciseGetHistorySets";
import { workoutExerciseGetSets } from "./training/workout/workoutExerciseGetSets";
import { workoutGetAllByType } from "./training/workout/workoutGetAllByType";
import { workoutGetAllExercise } from "./training/workout/workoutGetAllExercises";
import { workoutGetById } from "./training/workout/workoutGetById";

export default [
  exampleCreateItemRoute,
  exampleDeleteItemRoute,
  exampleGetAllItemsRoute,
  exampleGetItemRoute,
  exampleGetUserItemsRoute,
  exampleUpdateItemRoute,
  exerciseGetAllByMuscle,
  exerciseGetAll,
  exerciseById,
  exerciseCreate,
  exerciseDelete,
  exerciseEdit,
  workoutCreate,
  workoutDelete,
  workoutGetById,
  workoutEdit,
  workoutAddExercise,
  workoutDeleteExercise,
  workoutEditExercise,
  workoutGetAllByType,
  workoutGetAllExercise,
  workoutExerciseAddSet,
  workoutExerciseDeleteSet,
  workoutExerciseEditSet,
  workoutExerciseGetSets,
  workoutExerciseAddHistorySet,
  workoutExerciseDeleteHistorySet,
  workoutExerciseEditHistorySet,
  workoutExerciseGetHistorySets
];
