public class dovTest {

    public static void main(String[] args) {
      System.out.println("Hello World ----");
      String age = computeAge(1959, 9, 10, 2022, 7, 19);
      System.out.println(age);

    }
    static String computeAge(int yDOB, int mDOB, int dDOB, int yCur, int mCur, int dCur) {
        System.out.println("in computeAge");
        System.out.println("yDOB=" + yDOB + " mDOB=" + mDOB);
        System.out.println("yCur=" + yCur + " mCur=" + mCur);
        
        
        int ageYears = yCur - yDOB;
        int exMonths;
        int numMonths;
        if (mDOB > mCur) {
            ageYears = ageYears -1;
            exMonths = mDOB - mCur;
            numMonths = 12 - exMonths;
        }
        else {
            numMonths = mCur - mDOB;
        }
        System.out.println("Age years =" + ageYears + " Years and " + numMonths + " Months") ;

        String ageString = ageYears + ":" + numMonths + ":" + 0;
     
        return ageString;
    }
  }


  