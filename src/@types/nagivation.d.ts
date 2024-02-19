import { CarDTO } from "../dtos/carDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CarDetails: {
        car: CarDTO;
      };
      Scheduling: undefined;
      SchedulingDetails: undefined;
      SchedulingCompleted: undefined;
    }
  }
}
