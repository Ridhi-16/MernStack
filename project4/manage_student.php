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
            <div class="col-lg-10 table-responsive">
                <h1>Manage Student</h1>
                <table class="table table-bordered table-hover">
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>contact</th>
                        <th>Rno</th>
                        <th>Address</th>
                    </tr>
                    <?php
                    //db connect
                    include("connection.php");
                    // query 
                    $query="SELECT * from `students`";
                    //$query="SELECT * from `students` where `id`='3'";
                    //"SELECT `name`,`rno` from `students`"
                    //"SELECT `name`,`rno` from `students` where `address`='jalandhar'"
                    $res=mysqli_query($db,$query);
                    // print_r($res);
                    $sno=1;
                    while($data=mysqli_fetch_assoc($res)){
                        // print_r($data);
                    ?>
                    <tr>
                        <td><?php echo $sno;?></td>
                        <td><?php echo $data["name"];?></td>
                        <td><?php echo $data["email"];?></td>
                        <td><?php echo $data["contact"];?></td>
                        <td><?php echo $data["rno"];?></td>
                        <td><?php echo $data["address"];?></td>
                    </tr>
                    <?php   
                    $sno++;
                    }
                    ?>
                </table>
           
            </div>

        </div>

        </div>
    </section><!-- /Contact Section -->

</main>
<?php
include("footer.php");
?>

