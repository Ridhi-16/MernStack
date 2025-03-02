<?php
include("header.php");
?>
<main class="main">

    <!-- Page Title -->
    <div class="page-title" data-aos="fade">
    <div class="heading">
        <div class="container">
        <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
            <h1>Student</h1>
            </div>
        </div>
        </div>
    </div>
    <nav class="breadcrumbs">
        <div class="container">
        <ol>
            <li><a href="index.php">Home</a></li>
            <li class="current">Student</li>
        </ol>
        </div>
    </nav>
    </div><!-- End Page Title -->
    <!-- Contact Section -->
    <section id="contact" class="contact section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row justify-content-center gy-4">
            <div class="col-lg-8">
                <h1>Add Student</h1>
                <?php
                if(isset($_GET["msg"])){
                    echo "<div class='alert bg-info'>$_GET[msg]</div>";
                }
                ?>
            <form   method="post"  data-aos="fade-up" data-aos-delay="200">
                <div class="row gy-4">
                <div class="col-md-6">
                    <input type="text" name="name" class="form-control" placeholder="Your Name" required="">
                </div>
                <div class="col-md-6 ">
                    <input type="email" class="form-control" name="email" placeholder="Your Email" required="">
                </div>
                <div class="col-md-6 ">
                    <input type="password" class="form-control" name="password" placeholder="Your Password" required="">
                </div>
                <div class="col-md-6 ">
                    <input type="number" class="form-control" name="contact" placeholder="Your Contact" required="">
                </div>
                <div class="col-md-6 ">
                    <input type="number" class="form-control" name="rno" placeholder="Your Rno" required="">
                </div>
                <div class="col-md-6 ">
                    <input type="text" class="form-control" name="address" placeholder="Your address" required="">
                </div>
                <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <button type="submit" name="submit_btn">Submit</button>
                </div>

                </div>
            </form>
            </div><!-- End Contact Form -->

        </div>

        </div>
    </section><!-- /Contact Section -->

</main>
<?php
include("footer.php");
if(isset($_REQUEST["submit_btn"])){
    ///input data store variables 
    $name=$_REQUEST["name"];
    $email=$_REQUEST["email"];
    $password=md5($_REQUEST["password"]);
    $contact=$_REQUEST["contact"];
    $rno=$_REQUEST["rno"];
    $address=$_REQUEST["address"];
    // echo $name, $email, $password, $rno, $address, $contact;
    //database connectivity 
    include("connection.php");
    // hostname, username, password, databaseName
    // query 
    //"INSERT into `tablename`(`col1`,`col2`)VALUES('val1','val2')"
    $query="INSERT INTO `students`(`name`, `email`, `password`, `contact`, `address`, `rno`) VALUES ('$name','$email','$password','
    $contact','$address','$rno')";
    // query and database run 
    $res=mysqli_query($db, $query);
    // echo $res;
    if($res>0){
        echo "<script>window.location.assign('add_student.php?msg=Added successfully!!')</script>";
    }else{
        echo "<script>window.location.assign('add_student.php?msg=Error while adding')</script>";
    }
}
?>
