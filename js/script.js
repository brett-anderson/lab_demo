get_data();

$('#add_student').click(function (e) {  
  ajax_push_data()
  e.preventDefault();
})

$('#clear_data').click(function (e) {
  ajax_delete_data()
  e.preventDefault();
})

function ajax_push_data() {
  return $.ajax({
    type: "POST",
    url: 'php/post_data.php',
    data: {
      student_id: $('#student_id').val(),
      name:        $('#name').val(),
      height:      $('#height').val(),
    },
    success: function(data) {
      get_data();
    }
  });
}

function ajax_delete_data() {
  return $.ajax({
    type: "POST",
    url: 'php/clear_data.php',
    data: {
      student_id: $('#student_id').val(),
      name:        $('#name').val(),
      height:      $('#height').val(),
    },
    success: function(data) {
      get_data()
    }
  });
}

function get_data(){

  $.ajax({ 
    type: "POST", 
    url: "php/get_data.php", 
    data: { 
        table_name: "students", 
    }, 
    success: function(data) {
        $('#output').html('');
        draw_graph(JSON.parse(data));
          
    }, 
    error: function(data) { 
        alert("There is an error!") 
    } 
  });
} 




function draw_graph(dataset) {

  var multiplier  = 4;
  var w           = $('#output').width() + 30;
  var h           = 400;
  // var h           = d3.max( dataset['height'] );
  // var h           = d3.max(dataset, function(d){ return parseInt(d['height']) } ) * multiplier * 1.1;
  var barPadding = 100 / dataset.length;

  var yScale = d3.scale.linear()
             .domain([0, d3.max(dataset, function(d) { return parseInt(d['height']); })])
             .range([barPadding, h-barPadding]); 


  var axisScale = d3.scale.linear()
             .domain([0, d3.max(dataset, function(d) { return parseInt(d['height']); })])
             .range([h, barPadding]);

  //Create SVG element
  var svg = d3.select("#output")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

  svg.selectAll("rect")
     .data(dataset)
     .enter()
     .append("rect")
     .attr("x", function(d, i) {
        return i * (w * 0.8 / (dataset.length)) + 30;
     })
     .attr("y", function(d) {
        return h;
     })
     .attr('fill', function(d){
       return "rgba(0, 100, 255, " + yScale(d['height']) / 300  + ")";
     })
     .transition()
     .duration(800)
     .attr("y", function(d) {
        return h - yScale(d['height']);
     })
     .attr("width", w * 0.8 / dataset.length - barPadding)
     .attr("height", function(d) {
        return yScale(d['height']);
     });




  svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d){
      return d['name'];
    })
    .attr("x", function(d, i) {
        return i * (w * 0.8 / dataset.length) + 30 +  (w * 0.8 / dataset.length - barPadding) / 2;
    })
    .attr("y", function(d) {
      return h + 15;
    })
    .attr('fill', '#888')
    .transition()
    .duration(800)
    .attr("y", function(d) {
            return h - yScale(d['height']) + 15;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("text-anchor", "middle")

svg.append("g")
    .call(d3.svg.axis()
    .scale(axisScale)
    .ticks(5)
    .orient("right"))
    .attr("transform", "translate(0, -5)")
    .attr('class', 'axis');




}