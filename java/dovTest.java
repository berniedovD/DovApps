public class dovTest {

    public static void main(String[] args) {
      System.out.println("Hello World ----");
      String age = computeAge(1959, 9, 10);
      System.out.println(age);

    }
    static String computeAge(int yDOB, int mDOB, int dDOB) {
        System.out.println("in computeAge");
        System.out.println(yDOB, mDOB, dDOB);
        String ageString = "50:10:10";
        return ageString;
    }
  }


  