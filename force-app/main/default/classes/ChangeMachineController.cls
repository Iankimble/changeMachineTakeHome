public with sharing class ChangeMachineController {
    
    // Test code: I wanted to see if I could send and return a string from the apex method.
    // @AuraEnabled(cacheable=true)
    //  public static String doChange(String testButtonParamApex){
    //     String apexValue = testButtonParamApex;
    //     return apexValue;
    // }

  @AuraEnabled(cacheable=true)
  public static String doChange(Boolean change, Boolean machine){  
        String isChange ='Change';
        String isMachine ='Machine';
        String isChangeMachine ='Change Machine';
        String nothing = 'nothing';

        if(change== true && machine== true){    
        return isChangeMachine;
        }
        else if(machine== true){
        return isMachine;
        }
        else if(change== true ){
        return isChange; 
        }
        else{
            return nothing;
        }       
    }
}
