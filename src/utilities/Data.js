const items = [
    {   id:1,
        category:'tests',
        title:'Como soy?',
        description: '  ',
        longdescription:'Incluyen técnicas de autoconocimiento, tales como los inventarios sobre variables cognitivas, intereses, habilidades, rasgos de personalidad y/o valores. Le permitirán al usuario obtener una visión integral de sí mismo mediante un perfil cognitivo y de personalidad elaborado en base a las respuestas de los instrumentos..',
        price: 1000,
        pictureUrl:'img/19199644.jpg',
        stock:4}, 

    {   id:2,
        category:'tests',
        title:'Cuanto Sé?',
        description: 'Test verdadero para conocer en profundo',
        longdescription:'Se refiere al asesoramiento para la toma de decisiones de carrera. Se incluyen actividades diseñadas para enseñar al usuario a aplicar buenos principios de toma de decisiones para elegir carreras y para aprender a relacionar el autoconocimiento obtenido con las opciones académicas y ocupacionales.',
        price: 800,
        pictureUrl:'img/19198424.jpg',
        stock:10},

    {   id:3,
        category:'tests',
        title:'Que me esta pasando?',
        description: 'Test dinámico con el cual estaras a un paso de conocer un punto extra',
        longdescription:'Los instrumentos permitirán estimar el nivel de decisión/indecisión de carrera y ansiedad decisional, los cuales posibilitarán a los orientadores de carrera realizar intervenciones más precisas. También se incluyen las estrategias de búsqueda, mediante un mapa del mundo del trabajo, que ayudan al usuario a identificar las opciones que son más recomendables para su posterior exploración y elección. Este esquema organizativo y comprensivo de las ocupaciones, basado en la tipología RIASEC de Holland, permite emparejar las variables personales (variables cognitivas, contextuales, intereses y rasgos de personalidad) con las diferentes profesiones/ocupaciones.',
        price: 1500,
        pictureUrl:'img/imagen.jpg',
        stock:15},

    {   id:4,
        category:'tests',
        title:'Que tan decidido estoy?',
        description: 'Test en el cual predomina la tecnología para comprender el estado interior de la persona',
        longdescription:'Corresponde a la base de datos, compuesta por archivos que incluyen información precisa y actualizada sobre ocupaciones, instituciones académicas, oportunidades de financiamiento, entre otras funcionalidades. Estos datos se presentan de manera organizada incluyendo texto, gráficos, audio y vídeo.',
        price: 500,
        pictureUrl:'img/images.jpg',
        stock:5},
    
    ];

    export const getFetch = new Promise((resolve,reject) =>{
        setTimeout(()=>resolve(items),2000)        
    })   

const unoSolo = items.filter((producto)=>producto.id===1);
    
    export const getUnoFetch = new Promise((resolve,reject) =>{
            setTimeout(()=>resolve(unoSolo),2000)        
        })  

export const cartEmptyImg = 'https://i.postimg.cc/G2hshRLx/carrito-Vacio.png'

