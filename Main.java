class Vehicle 
{
	public void speed()
	{
		System.out.println("drive at 60kmph");
	}
}
class Car extends Vehicle
{
	public void brake()
	{
		System.out.println("push the break");
	}

}
class Main
{
	public static void main(String[] args) 
	{
		Car c1=new Car();
		c1.brake();
		c1.speed();
		Vehicle v1=new Vehicle();
		v1.speed();
		System.out.println("Hello World!");
	}
}
