import { CarDTO } from "../dtos/carDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Splash: undefined;
      Home: undefined;
      CarDetails: {
        car: CarDTO;
      };
      Scheduling: {
        car: CarDTO;
      };
      SchedulingDetails: {
        car: CarDTO;
        dates: string[];
      };
      SchedulingCompleted: undefined;
      MyCars: undefined;
    }
  }
}
