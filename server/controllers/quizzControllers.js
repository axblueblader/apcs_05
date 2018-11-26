let mongoose=require('mongoose');
let quizzSchemas=require('../schemas/quizzSchemas');


exports.partnerResult=(req,res,next)=>{
    console.log("Running the results")
    //search the partner's result on the db, if exists -> get the result
    console.log("Partner id: "+req.body.partnerID);
    quizzSchemas.find({userID: req.body.partnerID}).then((doc)=>{
        if(doc.length!=0)
        {
            console.log("Found!");
            console.log(doc);
            req.partnerResult=doc[0].userAns;
        }
        else{
            console.log("Cannot find the matching documents")
        }

    next();
    })
}

exports.startQuizz=(req,res,next)=>{
    //Request có dạng là
    //userID | .....
    //ans    | 10100
    console.log("Running start Quizz - controllers");
    console.log(req.body);
    let user=req.body.userID;
    let totalAns=req.body.ans;
    let partnerAns=req.partnerResult;
    console.log("Your partner result is: " +partnerAns);

  if(partnerAns)
    {
        //Got answered
        //start grading
        var grade=0;
        for (var i=0; i < totalAns.length;i++)
        {
            if ( totalAns[i] == partnerAns[i])
            {
                grade++
            }
        }
        //output the grade
        res.send("Your grades:"+grade);
        //delete from the db
        quizzSchemas.remove([{userID: req.body.userID},{userID:req.body.partnerID}]);
    
    }
    else{ //haven't got the ans
    //insert to the db
    console.log("Start inserting to the databse");
    let newAns=new quizzSchemas({
        userID: user,
        userAns: totalAns
    })
    newAns.save();
    //start counting down clock
    }
         

    

}