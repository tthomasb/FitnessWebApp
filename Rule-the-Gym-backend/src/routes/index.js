import { exampleCreateItemRoute } from "./examples/exampleCreateItem";
import { exampleDeleteItemRoute } from "./examples/exampleDeleteItem";
import { exampleGetAllItemsRoute } from "./examples/exampleGetAllItems";
import { exampleGetItemRoute } from "./examples/exampleGetItemById";
import { exampleGetUserItemsRoute } from "./examples/exampleGetUserItems";
import { exampleUpdateItemRoute } from "./examples/exampleUpdateItem";
import { exerciseCreate } from "./training/exercise/exerciseCreate";
import { exerciseDelete } from "./training/exercise/exerciseDelete";
import { exerciseEdit } from "./training/exercise/exerciseEdit";
import { exerciseGetAllByMuscle } from "./training/exercise/exerciseGetAllByMuscle";
import { exerciseById } from "./training/exercise/exerciseGetById";
import { exerciseGetAll } from "./training/workout/exerciseGetAll";
import { workoutAddExercise } from "./training/workout/workoutAddExercise";
import { workoutCreate } from "./training/workout/workoutCreate";
import { workoutDelete } from "./training/workout/workoutDelete";
import { workoutDeleteExercise } from "./training/workout/workoutDeleteExercise";
import { workoutEdit } from "./training/workout/workoutEdit";
import { workoutGetAllByType } from "./training/workout/workoutGetAllByType";
import { workoutGetAllExerciseByW_id } from "./training/workout/workoutGetAllExercisesByW_Id";
import { workoutById } from "./training/workout/workoutGetById";

export default [
  exampleCreateItemRoute,
  exampleDeleteItemRoute,
  exampleGetAllItemsRoute,
  exampleGetItemRoute,
  exampleGetUserItemsRoute,
  exampleUpdateItemRoute,
  workoutGetAllByType,
  workoutGetAllExerciseByW_id,
  exerciseGetAll,
  exerciseGetAllByMuscle,
  exerciseById,
  exerciseCreate,
  exerciseDelete,
  exerciseEdit,
  workoutCreate,
  workoutDelete,
  workoutById,
  workoutEdit,
  workoutAddExercise,
  workoutDeleteExercise,
];
