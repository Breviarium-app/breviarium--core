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
find . -type f -exec sed -i '' 's/"lectura_patristica_cita"/"lp_cita"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_texto"/"lp_texto"/g' {} +

find . -type f -exec sed -i '' 's/"lectura_biblica_titulo_a"/"lb_tit_a"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_biblica_titulo_i"/"lb_tit_i"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_biblica_titulo_p"/"lb_tit_p"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_biblica_cita_a"/"lb_cita_a"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_biblica_cita_i"/"lb_cita_i"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_biblica_cita_p"/"lb_cita_p"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_biblica_texto_a"/"lb_texto_a"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_biblica_texto_i"/"lb_texto_i"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_biblica_texto_p"/"lb_texto_p"/g' {} +

find . -type f -exec sed -i '' 's/"lectura_patristica_titulo_a"/"lp_tit_a"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_titulo_i"/"lp_tit_i"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_titulo_p"/"lp_tit_p"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_cita_a"/"lp_cita_a"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_cita_i"/"lp_cita_i"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_cita_p"/"lp_cita_p"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_texto_a"/"lp_texto_a"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_texto_i"/"lp_texto_i"/g' {} +
find . -type f -exec sed -i '' 's/"lectura_patristica_texto_p"/"lp_texto_p"/g' {} +

echo "lectura_biblica, lectura_patristica compressed 🗜️"

find . -type f -exec sed -i '' 's/"responsorio1"/"resp_1"/g' {} +
find . -type f -exec sed -i '' 's/"responsorio2_a"/"resp_2_a"/g' {} +
find . -type f -exec sed -i '' 's/"responsorio2_i"/"resp_2_i"/g' {} +
find . -type f -exec sed -i '' 's/"responsorio2_p"/"resp_2_p"/g' {} +
find . -type f -exec sed -i '' 's/"responsorio3_a"/"resp_3_a"/g' {} +
find . -type f -exec sed -i '' 's/"responsorio3_i"/"resp_3_i"/g' {} +
find . -type f -exec sed -i '' 's/"responsorio3_p"/"resp_3_p"/g' {} +

echo "lectura_biblica, lectura_patristica compressed 🗜️"