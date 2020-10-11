const {Router} = require ('express');
const router = Router();

const movies = require ('../movies.json')
const _=require('underscore');

router.get('/', (req,res)=>{
  res.send('<h1>Hola Clase</h1>')
})

router.get('/movies',(req,res)=>{
  res.json(movies)
}) 

router.post('/movies',(req,res)=>{
const {Titulo,Director,Categoria,Anio} = req.body;

if(Titulo && Director && Categoria && Anio){
  const id = movies.length + 1;
  const newMovie = {id,...req.body}
  movies.push(newMovie);
  console.log(movies)
  res.json(movies)
}else{
  res.send('Error al almacenar la información')
}
console.log(req.body)

});

router.put('/movies/:id', (req,res)=>{
  const {Titulo,Director,Categoria,Anio} = req.body;
  const {id}= req.params;

  if(Titulo && Director && Categoria && Anio){
    _.each(movies,(movie,i)=>{
      if(movie.id=id){
        movie.Titulo = Titulo;
        movie.Director = Director;
        movie.Categoria = Categoria;
        movie.Anio = Anio;
      }
    })
    res.json(movies)
  }
  else{
    res.send('Error de actualización información')
  }
  console.log(req.body)
})

//Borrar Movie
router.delete('/movies/:id',(req,res)=>{
const {id}= req.params;
_.each(movies,(movie,i)=>{
  if(movie.id==id){
    movies.splice(i,1)
  }
})
 console.log(`La pelicual ${req.params.id} fue borrado`);
res.json (movies);
})

module.exports = router;