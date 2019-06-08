#Сайт для кружка по робототехнике robx.org

Если необходимо внести изменения в содержание сайта, нужно отредактировать файлы.
Вот список наиболее вероятных мест для редактирования:

1. Для изменения даты нужно редактировать /main/register.php, 67 строка отвечает за отображаемые даты
   ```html
   <div>
     15-19 Февраля
   </div>
   ```
2. Для изменения списка классов нужно редактировать /main/register.php, начиная с 105 строки идет список пунктов в выпадающем меню
   ```html
   <option disabled="" selected="">Адрес класса</option>
   <option value="Гражданский пр., д. 111"
     >Гражданский пр., д. 111 (ст. м. Гражданский проспект.)</option
   >
   <option value="Выборгское ш., д. 156"
     >Выборгское ш., д. 156 (ст. м. Проспект Просвещения.)</option
   >
   <option value="Ленинский пр., д. 151"
     >Ленинский пр., д. 151 (ст. м. Московская
   </option>
   <option value="Пр. Медиков, д. 5"
     >Пр. Медиков, д. 5 (ст. м. Петроградская)</option
   >
   <option value="Заневский пр., д.53, к.2"
     >Заневский пр., д.53, к.2 (ст. м. Новочеркасская)</option
   >
   ```
3. Для изменения списка фотографий нужно редактировать /main/photos.php,начиная с 5 строки идут фотографии (в атрибут src прописывается путь фотографии)

   ```html
   <img src="photos/photo1.jpg" />
   <img src="photos/photo2.jpg" />
   <img src="photos/photo3.jpg" />
   <img src="photos/photo4.jpg" />
   <img src="photos/photo5.jpg" />
   <img src="photos/photo6.jpg" />
   <img src="photos/photo7.jpg" />
   ```

4. Для изменения списка фотографий нужно редактировать /main/reviews.php, начиная с 4 строки идут блок с отзывами по 2 в блоке(в атрибут src прописывается путь фотографии)
   ```html
   <div class="review">
     <img src="photos/comment-1.png" />
     <img src="photos/comment-1-m.png" />
   </div>
   <div class="review">
     <img src="photos/comment-2.png" />
     <img src="photos/comment-2-m.png" />
   </div>
   <div class="review">
     <img src="photos/comment-3.png" />
     <img src="photos/comment-3-m.png" />
   </div>
   <div class="review">
     <img src="photos/comment-4.png" />
     <img src="photos/comment-4-m.png" />
   </div>
   <div class="review">
     <img src="photos/comment-5.png" />
     <img src="photos/comment-5-m.png" />
   </div>
   <div class="review">
     <img src="photos/comment-6.png" />
     <img src="photos/comment-6-m.png" />
   </div>
   ```
5. Для изменения людей в команде нужно редактировать /main/team.php
