package app;

import java.io.IOException;

import javax.jws.WebMethod;

import app.data.DroneData;
import app.db.DatabaseFacade;

public class DroneDataService 
{
	DatabaseFacade  df = new DatabaseFacade();

	@WebMethod
	public void saveDroneData(Double height,Double x, Double y,byte[] image) 
	{
		System.out.println("Web Service Call");
		DroneData dd = new DroneData(height,x,y,image);
		System.out.println("Initialiced Drone data");
		df.saveDroneData(dd);
		System.out.println("En Web Service call");
	}
	
	
}
