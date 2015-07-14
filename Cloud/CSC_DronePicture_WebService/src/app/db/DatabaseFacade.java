package app.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import app.data.DroneData;

public class DatabaseFacade
{
	public void saveDroneData(DroneData dd)
	{
		Connection c;
		PreparedStatement ps;
		
		try
		{
		  c= this.getConnection();
		  System.out.println("Got Connection: ");
		  ps = c.prepareStatement("INSERT INTO DRONE_DATA" +
		  		"(id,height,x,y,image) " + 
		  		"VALUES (drone_data_seq.nextval,?,?,?,?)") ; 
		  ps.setDouble(1, dd.getHeight());
		  ps.setDouble(2, dd.getX());
		  ps.setDouble(3, dd.getY());
		  ps.setBytes(4, dd.getImage());
		  ps.execute();
		  c.commit();
		  c.close();
		
		}
		catch (Exception e)
		{
			System.out.println("Connection error: "+e);
		}
		
	}
	
	protected Connection getConnection() throws SQLException 
	{
		String driver = "jdbc:oracle:thin:@localhost:1521:XE";
		String user = "hack";
		String pwd = "hack";
		
		Connection conn;
		DriverManager.registerDriver(new oracle.jdbc.OracleDriver());
		conn = DriverManager.getConnection(driver, 
											 user, 
											 pwd
										   );
		return conn;
	}//getConnection
	
}
