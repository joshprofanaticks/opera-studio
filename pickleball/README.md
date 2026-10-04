# Torneo de Pickleball (cumple)

App de un solo archivo para llevar el torneo: parejas mixtas (grupo A + grupo B), puntaje individual, tabla de posiciones y gran final. No necesita internet ni instalar nada.

## Cómo usarla

1. Abre `pickleball/index.html` con doble clic en Chrome (o cualquier navegador moderno).
2. Escribe el nombre del torneo, agrega a la gente en Grupo A (más nivel) y Grupo B. Puedes pegar varios nombres separados por coma. Marca con el corazón a la cumpleañera: nunca descansa.
3. Revisa canchas, rondas regulares y puntos por partido. Presiona **¡Empezar torneo!**.
4. En cada ronda carga los marcadores (Enter salta al siguiente). La tabla se recalcula sola. Puedes volver a una ronda anterior y corregir.
5. Al terminar las rondas regulares: **Generar la Final** (parejas 1° con último, 2° con penúltimo…), opcionalmente **Juego 2 de la Final**, y luego **Terminar torneo** para ver el podio.

Todo se guarda solo en el navegador: si cierras la pestaña o se apaga la compu, el torneo sigue ahí. **Exportar** copia un resumen para WhatsApp y descarga un respaldo `.json` que se puede restaurar en otra computadora.

## Extras

- **Jugadores** (botón arriba): agregar a quien llega tarde, marcar a quien se fue, cambiar grupo o nombre.
- **Modo pantalla**: la tabla y los partidos en grande. Para una tele o segundo monitor, abre el mismo archivo en otra ventana con `#tv` al final de la dirección: se actualiza sola cuando cargas resultados en la ventana principal.
- **Sonido**: blips 8 bits al cargar resultados (apagado por defecto).
- **Demo**: abre `index.html#demo`, `#demo-play`, `#demo-final` o `#demo-done` para ver el app con datos de prueba sin tocar tu torneo real.

## Reglas que aplica

- Rondas regulares: parejas A+B al azar sin repetir pareja, rivales variados, partidos entre parejas de fuerza similar. Si sobra gente, descansan por turnos.
- Tabla: partidos ganados, luego diferencial de puntos, luego puntos a favor.
- Final: parejas por posición; la pareja 1°+último juega contra 2°+penúltimo. Si hay más parejas que canchas, descansa la pareja con menor posición (otra distinta en el juego 2).
- Gana quien quede arriba de la tabla al cerrar el torneo.
