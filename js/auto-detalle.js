/* funciones para obtener el parámetro ID de la URL actual */
document.addEventListener("DOMContentLoaded", function () {
  /* esperamos a que el html/DOM se cargue*/ function getParameterByName(
    name,
    url = window.location.href
  ) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp(
        "[?&]" + name + "(=([^&#]*)|&|#|$)"
      ) /* buscamos el parámetro en la URL */,
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2])
      return ""; /* si encuentra el parámetro pero no tiene valor, devuelve una cadena vacía */
    return decodeURIComponent(
      results[2].replace(/\+/g, " ")
    ); /* decodificamos el valor para el parámetro */
  }

  const autoId = getParameterByName("id");

  const autos = [
    {
      id: 1,
      marca: "Toyota",
      modelo: "Cross",
      anio: 2024,
      precio: 39900000,
      imagenes: [
        "/img/autos/toyota/cross/cross1.jpg",
        "/img/autos/toyota/cross/cross2.jpg",
        "/img/autos/toyota/cross/cross3.jpg",
        "/img/autos/toyota/cross/cross4.jpg",
        "/img/autos/toyota/cross/cross5.jpg",
        "/img/autos/toyota/cross/cross6.jpg",
      ],
      condicion: "nuevo",
      descripcion:
        "Toyota Cross 2024, SUV compacto con tecnología híbrida, perfecto para la ciudad y viajes cortos. Equipado con las últimas características de seguridad y confort.",
      kilometraje: 0,
    },

    {
      id: 2,
      marca: "Mitsubishi",
      modelo: "L200",
      anio: 2024,
      precio: 49800000,
      imagenes: [
        "/img/autos/mitsubishi/l200/l2001.jpg",
        "/img/autos/mitsubishi/l200/l2002.jpg",
        "/img/autos/mitsubishi/l200/l2003.jpg",
        "/img/autos/mitsubishi/l200/l2004.jpg",
        "/img/autos/mitsubishi/l200/l2005.jpg",
        "/img/autos/mitsubishi/l200/l2006.jpg",
      ],
      condicion: "nuevo",
      descripcion:
        "Mitsubishi L200 2024, robusta pickup con capacidad todo terreno. Ideal para trabajo pesado y aventuras off-road. Combina potencia y comodidad en un solo vehículo.",
      kilometraje: 0,
    },

    {
      id: 3,
      marca: "Ford",
      modelo: "Focus",
      anio: 2016,
      precio: 14900000,
      imagenes: [
        "/img/autos/ford/focus/focus1.jpg",
        "/img/autos/ford/focus/focus2.jpg",
        "/img/autos/ford/focus/focus3.jpg",
        "/img/autos/ford/focus/focus4.jpg",
        "/img/autos/ford/focus/focus5.jpg",
        "/img/autos/ford/focus/focus6.jpg",
      ],
      condicion: "usado",
      descripcion:
        "Ford Focus 2016, sedán compacto con excelente rendimiento y manejo ágil. Ideal para la ciudad y viajes largos, con un diseño moderno y características de seguridad avanzadas.",
      kilometraje: 130000,
    },

    {
      id: 4,
      marca: "Chevrolet",
      modelo: "Corsa",
      anio: 2010,
      precio: 6900000,
      imagenes: [
        "/img/autos/chevrolet/corsa/corsa1.jpg",
        "/img/autos/chevrolet/corsa/corsa2.jpg",
        "/img/autos/chevrolet/corsa/corsa3.jpg",
        "/img/autos/chevrolet/corsa/corsa4.jpg",
        "/img/autos/chevrolet/corsa/corsa5.jpg",
        "/img/autos/chevrolet/corsa/corsa6.jpg",
      ],
      condicion: "usado",
      descripcion:
        "Chevrolet Corsa 2010, compacto económico y versátil. Perfecto para la ciudad, con bajo consumo de combustible y un manejo ágil. Ideal para quienes buscan un auto práctico y accesible.",
      kilometraje: 210000,
    },

    {
      id: 5,
      marca: "Hyundai",
      modelo: "Kona",
      anio: 2024,
      precio: 32000000,
      imagenes: [
        "/img/autos/hyundai/kona/kona1.jpg",
        "/img/autos/hyundai/kona/kona2.jpg",
        "/img/autos/hyundai/kona/kona3.jpg",
        "/img/autos/hyundai/kona/kona4.jpg",
        "/img/autos/hyundai/kona/kona5.jpg",
        "/img/autos/hyundai/kona/kona6.jpg",
      ],
      condicion: "nuevo",
      descripcion:
        "Hyundai Kona 2024, SUV compacta con un diseño moderno y tecnología avanzada. Perfecta para la ciudad y aventuras, ofrece confort, seguridad y un rendimiento eficiente en todos los terrenos.",
      kilometraje: 0,
    },

    {
      id: 6,
      marca: "Fiat",
      modelo: "Cronos",
      anio: 2024,
      precio: 21000000,
      imagenes: [
        "/img/autos/fiat/cronos/cronos1.jpg",
        "/img/autos/fiat/cronos/cronos2.jpg",
        "/img/autos/fiat/cronos/cronos3.jpg",
        "/img/autos/fiat/cronos/cronos4.jpg",
        "/img/autos/fiat/cronos/cronos5.jpg",
        "/img/autos/fiat/cronos/cronos6.jpg",
      ],
      condicion: "nuevo",
      descripcion:
        "Fiat Cronos 2024, sedán elegante y práctico, ideal para quienes buscan un vehículo con estilo y eficiencia. Con tecnología de vanguardia y un interior espacioso, es perfecto para el día a día y viajes largos.",
      kilometraje: 0,
    },

    {
      id: 7,
      marca: "Honda",
      modelo: "Civic SI",
      anio: 2012,
      precio: 15500000,
      imagenes: [
        "/img/autos/honda/civic/civic1.jpg",
        "/img/autos/honda/civic/civic2.jpg",
        "/img/autos/honda/civic/civic3.jpg",
        "/img/autos/honda/civic/civic4.jpg",
        "/img/autos/honda/civic/civic5.jpg",
        "/img/autos/honda/civic/civic6.jpg",
      ],
      condicion: "usado",
      descripcion:
        "Honda Civic Si 2012, compacto deportivo con un motor potente y un diseño dinámico. Ideal para los que buscan una conducción emocionante y un rendimiento excepcional. Equipado con características deportivas y tecnología avanzada.",
      kilometraje: 120000,
    },

    {
      id: 8,
      marca: "Honda",
      modelo: "HR-V",
      anio: 2017,
      precio: 18200000,
      imagenes: [
        "/img/autos/honda/hrv/hrv1.jpg",
        "/img/autos/honda/hrv/hrv2.jpg",
        "/img/autos/honda/hrv/hrv3.jpg",
        "/img/autos/honda/hrv/hrv4.jpg",
        "/img/autos/honda/hrv/hrv5.jpg",
        "/img/autos/honda/hrv/hrv6.jpg",
      ],
      condicion: "usado",
      descripcion:
        "Honda HR-V 2017, SUV compacto con un diseño moderno y versatilidad. Perfecto para quienes buscan un vehículo ágil para la ciudad sin sacrificar espacio y confort. Equipado con tecnología avanzada y eficiencia en combustible, ideal para el día a día y escapadas de fin de semana.",
      kilometraje: 90000,
    },

    {
      id: 9,
      marca: "Toyota",
      modelo: "Corolla",
      anio: 2022,
      precio: 31500000,
      imagenes: [
        "/img/autos/toyota/corolla/corolla1.jpg",
        "/img/autos/toyota/corolla/corolla2.jpg",
        "/img/autos/toyota/corolla/corolla3.jpg",
        "/img/autos/toyota/corolla/corolla4.jpg",
        "/img/autos/toyota/corolla/corolla5.jpg",
      ],
      condicion: "usado",
      descripcion:
        "Toyota Corolla 2022, sedán elegante y eficiente con tecnología de última generación. Ideal para quienes buscan un vehículo confiable, económico y con un manejo cómodo. Equipado con avanzadas características de seguridad y un motor eficiente, perfecto tanto para viajes largos como para el uso diario en la ciudad.",
      kilometraje: 30000,
    },

    {
      id: 10,
      marca: "Ford",
      modelo: "Maverick",
      anio: 2024,
      precio: 48000000,
      imagenes: [
        "/img/autos/ford/maverick/maverick1.jpg",
        "/img/autos/ford/maverick/maverick2.jpg",
        "/img/autos/ford/maverick/maverick3.jpg",
        "/img/autos/ford/maverick/maverick4.jpg",
        "/img/autos/ford/maverick/maverick5.jpg",
        "/img/autos/ford/maverick/maverick6.jpg",
      ],
      condicion: "nuevo",
      descripcion:
        "Ford Maverick 2024, pickup compacta y versátil con un motor híbrido eficiente. Perfecta para quienes buscan un vehículo práctico, ideal para la ciudad y con capacidad para aventuras al aire libre. Ofrece un diseño robusto, tecnología avanzada y una impresionante economía de combustible, lo que lo convierte en una opción perfecta para aquellos que necesitan funcionalidad y estilo sin comprometer el rendimiento.",
      kilometraje: 0,
    },
  ];

  const autoData = autos.find(
    (auto) => auto.id.toString() === autoId
  ); /* comparamos el ID de cada auto en el array con el valor de autoId */

  if (!autoData) {
    console.error("Auto no encontrado");
    return;
  }

  /* información del auto */
  const autoTitulo = document.getElementById("auto-titulo");
  const autoDescripcion = document.getElementById("auto-descripcion");
  const autoPrecio = document.getElementById("auto-precio");
  const autoImagen = document.getElementById("auto-imagen");
  const autoKilometraje = document.getElementById("auto-kilometraje");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const contactoBtn = document.getElementById("contacto-btn");
  const contactoForm = document.getElementById("contacto-form");

  autoTitulo.textContent = `${autoData.marca} ${autoData.modelo} (${autoData.anio})`;
  autoDescripcion.textContent = autoData.descripcion;
  autoPrecio.textContent = `Precio: $${autoData.precio.toLocaleString()}`;
  autoKilometraje.textContent = `Kilometraje: ${autoData.kilometraje.toLocaleString()} km`;

  let currentImg = 0;

  function updateImage() {
    autoImagen.src = autoData.imagenes[currentImg];
    autoImagen.alt = `Imagen ${currentImg + 1}`;
  }

  updateImage();

  /* flechas para pasar las imágenes */

  prevBtn.addEventListener("click", function () {
    currentImg =
      (currentImg - 1 + autoData.imagenes.length) % autoData.imagenes.length;
    updateImage();
  });

  nextBtn.addEventListener("click", function () {
    currentImg = (currentImg + 1) % autoData.imagenes.length;
    updateImage();
  });

  contactoBtn.addEventListener("click", function () {
    contactoForm.style.display =
      contactoForm.style.display === "none" ? "block" : "none";
  });

  contactoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const telefono = document.getElementById("telefono").value;
    alert(`Gracias, te contactaremos al número: ${telefono}`);
    contactoForm.reset();
    contactoForm.style.display = "none";
  });
});
