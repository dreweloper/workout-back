# The Bridge | Workout

## Despliegue

La API se encuentra desplegada y disponible en Render: [https://workout-back-dkij.onrender.com](https://workout-back-dkij.onrender.com).

---

## PENDIENTE:

Una vez faciliten las URL definitivas, hay que añadirlas al `JSON` de la carpeta `data`:

```json
[
    {
        "pills": [
            {
                "url_pdf": "#", // URL DEL PDF
                "url_iframe_notebook": "#", // URL DEL JUPYTER NOTEBOOK
                "url_iframe_vimeo": "#", // URL DEL VÍDEO DE VIMEO
                "url_challenge": "#" // URL DEL CHALLENGE (CLASSROOM)
            }
        ]
    }
]
```

Cada píldora tiene un id único, por lo que tendrá asociada la URL que corresponda a cada propiedad de esa píldora en concreto.