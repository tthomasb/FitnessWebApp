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
import { userCreate } from "./training/users/userCreate";
import { userDelete } from "./training/users/userDelete";
import { userEdit } from "./training/users/userEdit";
import { userById } from "./training/users/userGetById";
import { workoutCreate } from "./training/workout/workout/workoutCreate";
import { workoutDelete } from "./training/workout/workout/workoutDelete";
import { workoutDeleteExercise } from "./training/workout/workout_exercise/workoutDeleteExercise";
import { workoutEdit } from "./training/workout/workout/workoutEdit";
import { workoutEditExercise } from "./training/workout/workout_exercise/workoutEditExercise";
import { workoutExerciseAddHistorySet } from "./training/workout/set_history/workoutExerciseAddHistorySet";
import { workoutExerciseAddSet } from "./training/workout/set/workoutExerciseAddSet";
import { workoutExerciseDeleteHistorySet } from "./training/workout/set_history/workoutExerciseDeleteHistorySet";
import { workoutExerciseDeleteSet } from "./training/workout/set/workoutExerciseDeleteSet";
import { workoutExerciseEditHistorySet } from "./training/workout/set_history/workoutExerciseEditHistorySet";
import { workoutExerciseEditSet } from "./training/workout/set/workoutExerciseEditSet";
import { workoutExerciseGetHistorySets } from "./training/workout/set_history/workoutExerciseGetHistorySets";
import { workoutExerciseGetSets } from "./training/workout/set/workoutExerciseGetSets";
import { workoutGetAll } from "./training/workout/workout/workoutGetAll";
import { workoutGetAllExercise } from "./training/workout/workout_exercise/workoutGetAllExercises";
import { workoutGetById } from "./training/workout/workout/workoutGetById";
import { workoutExerciseDelete } from "./training/workout/workout_exercise/workoutExerciseDelete";
import { workoutExerciseAdd } from "./training/workout/workout_exercise/workoutExerciseAdd";

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
  workoutDeleteExercise,
  workoutEditExercise,
  workoutGetAll,
  workoutGetAllExercise,
  workoutExerciseAddSet,
  workoutExerciseDeleteSet,
  workoutExerciseEditSet,
  workoutExerciseGetSets,
  workoutExerciseAddHistorySet,
  workoutExerciseDeleteHistorySet,
  workoutExerciseEditHistorySet,
  workoutExerciseGetHistorySets,
  workoutExerciseDelete,
  workoutExerciseAdd,
  userById,
  userCreate,
  userDelete,
  userEdit
];
