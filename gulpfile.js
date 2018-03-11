var gulp = require("gulp");

gulp.task("jquery", function() {
  return gulp
    .src("node_modules/jquery/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("bootstrap", ["jquery"], function() {
  return gulp
    .src("node_modules/bootstrap/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("select2", ["bootstrap"], function() {
  return gulp
    .src("select2-bootstrap-theme/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("clipboard", function() {
  return gulp.src("clipboard.js/dist/**/*").pipe(gulp.dest("assets/vendor"));
});

gulp.task("x-editable", function() {
  return gulp.src("x-editable/dist/**/*").pipe(gulp.dest("assets/vendor"));
});

gulp.task("adminlte", ["bootstrap", "select2"], function() {
  return gulp.src("AdminLTE/dist/**/*").pipe(gulp.dest("assets/vendor"));
});

gulp.task("bootstrap-colorpicker", ["bootstrap"], function() {
  return gulp
    .src("node_modules/bootstrap-colorpicker/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("bootstrap-datepicker", ["bootstrap"], function() {
  return gulp
    .src("node_modules/bootstrap-datepicker/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("bootstrap-daterangepicker", ["bootstrap"], function() {
  return gulp
    .src("node_modules/bootstrap-daterangepicker/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("bootstrap-slider", ["bootstrap"], function() {
  return gulp
    .src("node_modules/bootstrap-slider/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("bootstrap-timepicker", ["bootstrap"], function() {
  return gulp
    .src("node_modules/bootstrap-timepicker/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("ckeditor", function() {
  return gulp
    .src("node_modules/ckeditor/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("fastclick", function() {
  return gulp
    .src("node_modules/fastclick/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("flot", function() {
  return gulp
    .src("node_modules/flot/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});
gulp.task("font-awesome", function() {
  return gulp
    .src("node_modules/font-awesome/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("fullcalendar", function() {
  return gulp
    .src("node_modules/fullcalendar/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("html5shiv", function() {
  return gulp
    .src("node_modules/html5shiv/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("inputmask", function() {
  return gulp
    .src("node_modules/inputmask/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("ion-rangeslider", function() {
  return gulp
    .src("node_modules/ion-rangeslider/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("ionicons", function() {
  return gulp
    .src("node_modules/ionicons/dist/**/*")
    .pipe(gulp.dest("assets/vendor"));
});

gulp.task("default", [
  "adminlte",
  "ckeditor",
  "fastclick",
  "flot",
  "font-awesome",
  "fullcalendar",
  "html5shiv",
  "inputmask",
  "ion-rangeslider",
  "ionicons"
]);
