# Karamel’s Sushi

Catálogo estático conectado al CSV publicado de Google Sheets. Pedidos por WhatsApp a +56 9 2710 0640.

## Ejecutar

Abre esta carpeta en tu repositorio de GitHub. En Vercel usa **Other**, comando de compilación `npm run build` y directorio de salida `dist`. No se necesitan variables de entorno.

Para previsualizar localmente, ejecuta `npm run build` y sirve `dist` con un servidor HTTP estático. El catálogo necesita conexión a Internet para obtener el CSV.

## Actualizar la carta

Edita la hoja publicada. Los campos son `id`, `categoria`, `nombre`, `descripcion`, `opciones`, `precio`, `stock`, `foto`, `revision`. Mantén `id` único; usa `sí` o `no` en `stock`. `foto` admite una URL pública directa de imagen. Una URL fallida se oculta sin dejar hueco. Las imágenes de portada se distribuyen en `public/images` y se publican junto con el sitio.

Los cambios de productos, precios, stock y fotos no requieren volver a publicar. Cambiar la estructura de opciones interactivas puede requerir una actualización del código.
