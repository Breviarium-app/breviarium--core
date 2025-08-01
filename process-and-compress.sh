#!/bin/bash

cp -r ./databases/* ./src/prayers/db/
echo "Database files imported to library 💽"

cd ./src/prayers/db/ || exit

# Replace keys related to primer salmo
find . -type f -exec sed -i '' 's/"primer_salmo_cita"/"s1_c"/g' {} +
find . -type f -exec sed -i '' 's/"primer_salmo_antifona"/"s1_a"/g' {} +
find . -type f -exec sed -i '' 's/"primer_salmo_texto"/"s1_t"/g' {} +
echo "primer_salmo compressed 🗜️"

# Replace keys related to segundo salmo
find . -type f -exec sed -i '' 's/"segundo_salmo_cita"/"s2_c"/g' {} +
find . -type f -exec sed -i '' 's/"segundo_salmo_antifona"/"s2_a"/g' {} +
find . -type f -exec sed -i '' 's/"segundo_salmo_texto"/"s2_t"/g' {} +
echo "segundo_salmo compressed 🗜️"

# Replace keys related to tercer salmo
find . -type f -exec sed -i '' 's/"tercer_salmo_cita"/"s3_c"/g' {} +
find . -type f -exec sed -i '' 's/"tercer_salmo_antifona"/"s3_a"/g' {} +
find . -type f -exec sed -i '' 's/"tercer_salmo_texto"/"s3_t"/g' {} +
echo "tercer_salmo compressed 🗜️"

# Replace keys related to lectura biblica
find . -type f -exec sed -i '' 's/"lectura_biblica_cita"/"lb_c"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_biblica"/"lb_t"/g' {} +
echo "lectura_biblica compressed 🗜️"

# Replace other keys
find . -type f -exec sed -i '' 's/"cantico_evangelico_antifona"/"ce_a"/g' {} +
find . -type f -exec sed -i '' 's/"preces_intro"/"preces_i"/g' {} +
find . -type f -exec sed -i '' 's/"preces_respuesta"/"preces_r"/g' {} +
find . -type f -exec sed -i '' 's/"preces_contenido"/"preces_c"/g' {} +
find . -type f -exec sed -i '' 's/"invitacion_padrenuestro"/"invi_pn"/g' {} +
find . -type f -exec sed -i '' 's/"oracion_final"/"o_final"/g' {} +
echo "preces, cantico_evangelico, preces, oracion_final compressed 🗜️"
# Officium

# Replace keys related to lectura biblica
find . -type f -exec sed -i '' 's/"lectura_biblica_titulo"/"lb_tit"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_biblica_texto"/"lb_texto"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_titulo"/"lp_tit"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_cita"/"lp_c"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_texto"/"lp_texto"/g' {} +
echo "lectura_biblica, lectura_patristica compressed 🗜️"