<script src="assets/js/jquery.min.js"></script>
<script>var submitted=false;</script>
<script>
$('#gform').on('submit', function(e) {
  $('#gform *').fadeOut(2000);
  $('#gform').prepend('Your submission has been processed...');
  });
</script>