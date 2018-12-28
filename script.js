var goods = [];
var costUp = [];
var costDown = [];
var categories = []
var cats = [];
var basket = [];

var stat = {
	allCat: true,
	beforeCat: false,
	afterCat: false
}


function getCategories() {
	$('.categories').empty(); 
	for(var cat in goods) {
		if(cats.indexOf(goods[cat].category) == -1) {
			cats.push(goods[cat].category);
		}
	}

	for(var i = 0; i < cats.length; i++) {
		$('.menu').append(
			'<p class="cats">' + cats[i] + '</p>'
		);
	}
}


$(document).ready(function(){

function generate(mass) {
	$('.container').empty();
	for(var i in mass) {
		$('.container').append(
			'<div class="good"><span class="good-name">' + mass[i].name + '</span>' + 
			'<div class="good-img">200x200</div>' + '<span class="good-cost">' + mass[i].cost + '</span>' + 
			'<span class="good-vogue">' + mass[i].vogue + '</span>' + 
			'<span class="good-weight none">' + mass[i].weight + '</span>' +
			'<span class="good-description none">' + mass[i].description + '</span>' +
			'<span class="good-category none">' + mass[i].category + '</span>' +
			'<span class="add">Добавить</span></div>'
		);
	}
}

	$.post("http://r2ls.ru/", { seed: 2, cat_name: "old-name" }, function(data) {
		goods = JSON.parse(data); 
		for(var i = 0; i < 20; i++) {
			generate(goods);
		}
		getCategories();
	});

	$('.allCat').click(function(){
		stat.allCat = true;
		stat.afterCat = false;
		stat.beforeCat = false;
		costUp = [];
		generate(goods);
	})
 
	$('.beforeCat').click(function() {
		stat.allCat = false;
		stat.afterCat = false;
		stat.beforeCat = true;
		var j = 0;
		costUp = [];
		$('.container').empty();

		for(var i = 0; i < goods.length; i++) {		
			if (goods[i].cost >= 10000) {
				costUp[j] = goods[i];
				j++;
			}
		}
		generate(costUp);
	})

	$('.afterCat').click(function() {
		stat.allCat = false;
		stat.beforeCat = false;
		stat.afterCat = true;
		var j = 0;
		costDown = [];
		$('.container').empty();
		for(var i = 0; i < goods.length; i++) {		
			if (goods[i].cost < 10000) {
				costDown[j] = goods[i];
				j++;
			}
		}
		generate(costDown);
	})

	$('.sortUp').click(function(){
		if(stat.allCat == true){
			goods.sort(function(a,b){
				return a.cost - b.cost;
			})
			generate(goods);
		}

		if(stat.beforeCat == true) {
			costUp.sort(function(a,b){
				return a.cost - b.cost;
			})
			generate(costUp);
		}

		if(stat.afterCat == true) {
			costDown.sort(function(a,b){
				return a.cost - b.cost;
			})
			generate(costDown);
		}

	})

	$('.sortDown').click(function(){
		if(stat.allCat == true){
			goods.sort(function(a,b){
				return b.cost - a.cost;
			})
			generate(goods);
		}

		if(stat.beforeCat == true) {
			costUp.sort(function(a,b){
				return b.cost - a.cost;
			})
			generate(costUp);
		}

		if(stat.afterCat == true) {
			costDown.sort(function(a,b){
				return b.cost - a.cost;
			})
			generate(costDown);
		}
	})

	$('.sortWeightUp').click(function(){
		if(stat.allCat == true){
			goods.sort(function(a,b){
				return a.weight - b.weight;
			})
			generate(goods);
		}

		if(stat.beforeCat == true) {
			costUp.sort(function(a,b){
				return a.weight - b.weight;
			})
			generate(costUp);
		}

		if(stat.afterCat == true) {
			costDown.sort(function(a,b){
				return a.weight - b.weight;
			})
			generate(costDown);
		}
	})

	$('.sortWeightDown').click(function(){
		if(stat.allCat == true){
			goods.sort(function(a,b){
				return b.weight - a.weight;
			})
			generate(goods);
		}

		if(stat.beforeCat == true) {
			costUp.sort(function(a,b){
				return b.weight - a.weight;
			})
			generate(costUp);
		}

		if(stat.afterCat == true) {
			costDown.sort(function(a,b){
				return b.weight - a.weight;
			})
			generate(costDown);
		}
	})

	$('.sortVogueUp').click(function(){
		if(stat.allCat == true){
			goods.sort(function(a,b){
				return a.vogue- b.vogue
			})
			generate(goods);
		}

		if(stat.beforeCat == true) {
			costUp.sort(function(a,b){
				return a.vogue - b.vogue;
			})
			generate(costUp);
		}

		if(stat.afterCat == true) {
			costDown.sort(function(a,b){
				return a.vogue - b.vogue;
			})
			generate(costDown);
		}
	})

	$('.sortVogueDown').click(function(){
		if(stat.allCat == true){
			goods.sort(function(a,b){
				return b.vogue - a.vogue;
			})
			generate(goods);
		}

		if(stat.beforeCat == true) {
			costUp.sort(function(a,b){
				return b.vogue - a.vogue;
			})
			generate(costUp);
		}

		if(stat.afterCat == true) {
			costDown.sort(function(a,b){
				return b.vogue - a.vogue;
			})
			generate(costDown);
		}
	})

	//Обработка кликов по категориям
	$(document).on('click', ('.cats'), function(){
		var name = $(this).text();
		$('.container').empty();
		for(var i in goods) {
			if(goods[i].category == name) {
				$('.container').append(
					'<div class="good"><span class="good-name">' + goods[i].name + '</span>' + 
					'<div class="good-img">200x200</div>' + '<span class="good-cost">' + goods[i].cost + '</span>' + 
					'<span class="good-vogue">' + goods[i].vogue + '</span>' + 
					'<span class="good-weight none">' + goods[i].weight + '</span>' +
					'<span class="good-description none">' + goods[i].description + '</span>' +
					'<span class="good-category none">' + goods[i].category + '</span>' +
					'<span class="add">Добавить</span></div>'
				);
			}
		}
	})

	$(document).on('click', '.good-img', function(){
		var name = $(this).parent().find('.good-name').text();
		var cost = $(this).parent().find('.good-cost').text();
		var desc = $(this).parent().find('.good-description').text();
		$('.modal').fadeIn(300);
		$('.modal').css({ display: 'flex' })

		$('.modal-content').find('.good-name').text(name);
		$('.modal-content').find('.good-cost').text(cost);
		$('.modal-content').find('.good-desc').text(desc);
	
		$('.close').click(function(){
			$('.modal').fadeOut(300);
		})
	})

	$('.reset').click(function() {
		generate(goods);
	});
	// Реализуем корзину
	var int = 0;
	var a = 0;
	$('.int').text(int);
	$(document).on('click', '.add', function(){
		int++;
		$('.int').text(int);

		var name = $(this).parent().find('.good-name').text();
		for(var i in goods){
			if(goods[i].name == name){
				basket[a] = goods[i];
				a++;
				// var cost = basket[a].cost.text();
				// var sum = 0;
				// sum += cost;
			}
		}
	})

	$(document).on('click', '.delete', function(){
		$(this).parent(2).remove();
		var name = $(this).parent().find('.good-name').text();
		--int;
		$('.int').text(int);
		for(var i = 0; i < basket.length; i++){
			if(basket[i].name == name)
				 basket.splice(i,1);
		}
	})

	$('.basket').click(function(){
		$('.container').empty();
		for(var i in basket) {
			$('.container').append(
				'<div class="good"><span class="good-name">' + basket[i].name + '</span>' + 
				'<div class="good-img">200x200</div>' + '<span class="good-cost">' + basket[i].cost + '</span>' + 
				'<span class="good-vogue">' + basket[i].vogue + '</span>' + 
				'<span class="good-weight none">' + basket[i].weight + '</span>' +
				'<span class="good-description none">' + basket[i].description + '</span>' +
				'<span class="good-category none">' + basket[i].category + '</span>' +
				'<span class="delete">Удалить</span></div>'	
			);	
		}
	});
});
