//Constantes com as dependencias
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obifuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

//Função para compilar e comprimir o arquivo SASS
function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

//Função para comprimir os scripts JS
function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obifuscate())
        .pipe(gulp.dest('./build/scripts'))
};

//Função para comprimir imagem
function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

//Executar o gulp com todas as funções em modo watch (npm run gulp)
exports.default = function() {
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*',{ignoreInitial: false}, gulp.series(comprimeImagens));
}

//Executar o gulp com todas as funções somente uma vez (npm run gulp oneTime)
exports.oneTime = gulp.series(compilaSass, comprimeJavaScript, comprimeImagens);
