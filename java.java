import java.util.Scanner;
public class Histogram {

   public static void main(String[] args) {
     Scanner keyboard = new Scanner(System.in);
     String numbers;
int min1;
int min2;

     numbers = keyboard.next();
     System.out.println(numbers);

    
     String[] parts = numbers.split(" ");

    int[] n1 = new int[parts.length];

    for(int n = 0; n < parts.length; n++) {

   n1[n] = Integer.parseInt(parts[n]);

}

for (int i=0 , i < n1.length; i++)
{
    if (n1[i]< n1[i+1])
    {
min1= n1[i]
    }
    else {
        min1=n1[i+1]
    }
}


}
}