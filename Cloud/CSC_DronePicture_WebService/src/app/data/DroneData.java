package app.data;

public class DroneData {
	
	Double height;
	Double x;
	Double y;
	byte[] image;
	
	public DroneData(Double height,Double x, Double y,byte[] image)
	{
		this.height = height;
		this.x = x;
		this.y = y;
		this.image = image;
	}
	
	public Double getHeight() {
		return height;
	}
	public void setHeight(Double height) {
		this.height = height;
	}
	public Double getX() {
		return x;
	}
	public void setX(Double x) {
		this.x = x;
	}
	public Double getY() {
		return y;
	}
	public void setY(Double y) {
		this.y = y;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	
	

}
