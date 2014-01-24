<?


?>
<!DOCTYPE html>
<html>
<head>
  <title>Lab</title>
  <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<div class="container">
  <h1 class="text-center">Lab Demo</h1>
  <div class="row">
    <div id="input" class="col-md-4">
      <form accept-charset="utf-8">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" value='chelsea' type="text" name="name" placeholder="name" class="form-control">  
        </div>
<!--         <div class="form-group">
          <label for="student_id">Student Number</label>
          <input value='2' id="student_id" type="number" name="student_id" placeholder="Student Number" class="form-control">  
        </div> -->
        <div class="form-group">
          <label for="height">Height</label>
          <input id="height" value='50' type="number" name="height" placeholder="height" class="form-control">  
        </div>
      </form>
      <button id="add_student" class="btn btn-default">Submit Student</button>
      <button id="clear_data" class="btn btn-default">Clear Last</button>
      
    </div>
    <div id="output" class="col-md-6"></div>
  </div>
</div>
    
  </div>

<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>