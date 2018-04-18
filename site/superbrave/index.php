<!DOCTYPE html>
<html>
	<head>
		<title>Super Brave Form</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="css/framework/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<script src="js/jquery.js"></script>
		<script src="js/scripts.js"></script>
	</head>
	<body>
		<?php include('header.php'); ?>
		<div class="container">
			<div class="row">
				<h1>Uw consult aanvraag voor Erectiestoornis</h1>
			</div>
		</div>
		<div class="container form-wrapper">
			<div class="row">
				<div class="col-md-12">
					<div class="status">
						<div class="status-percentage"><span>30% voltooid</span></div>
						<span class="step">Stap 3 van de 5</span>
						<h3 class="status-title">Product voorkeur</h3>
					</div>
					<div class="form">
						<div class="row">
							<div class="col-md-8">
								<form id="consult">
									<div class="category-selection">	
										<label for="category">Uw geselecteerde categorie voor uw consult aanvraag</label>
										<select id="category"><option selected></option><option>Erectiestoornis</option></select>
									</div>
									<div class="product-selection">	
										<label for="products" class="products">Kies uw gewenste product en de hoeveelheid dosering</label>
										<select id="products"><option selected></option></select>
									</div>
									<div id="amount" class="amount"></div>
								</form>
								<div class="chosen">	
									<h4>U heeft gekozen voor:</h3>
									<p>Tadalafil met een dosering van 10 mg en 24 tabletten (incl. consult en service fee) De kosten van deze opdracht bedraagt € 323,90</p>	
								</div>
								<div class="no-idea">
									<p>Help, ik heb geen idee welk product ik moet kiezen</p>
								</div>
							</div>
							<div class="col-md-4">
								<div class="more-info">
									<div class="more-info-content">
										<h3>dokteronline.com</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi consequatur, dolorem nobis in perferendis iste? Incidunt praesentium illum est reiciendis, quasi repudiandae, ut, consequatur, beatae quo nihil doloribus illo enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi consequatur, dolorem nobis in perf</p>
									</div>
									<div class="other-info">
										<h3>Privacy verklaring</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="navigation">
						<a href="#" class="return">Ga terug</a>
						<a href="#" class="next">Volgende stap</a>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<?php include('footer.php'); ?>
		</div>
	</body>
</html>