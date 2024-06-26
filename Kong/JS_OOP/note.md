# Object Oriented Programing

## What is OOP?
คือการโมงสิ่งต่างๆเป็นวัตถุ ประกอบด้วย

## องค์ประกอบพื้นฐาน
<ol>
  <li>Class</li>
  <li>Object</li>
    <ul>
      <li>Property (คุณลักษณะ)สิ่งที่บ่งบอกลักษณะทั่วไป หรือ ข้อมูลของวัตถุ</li>
      <li>Method (พฤติกรรม)พฤติกรรมของวัตถุที่สามารถกระทำได้</li>
    </ul>
    โดย Class จะเป็นต้นแบบในการสร้าง Object
</ol>

## คุณสมบัติ
<ol>
  <li>Encapsulation (การห่อหุ้ม)</li>
  <li>Inheritance (การสืบทอด)</li>
  <li>Polymorphism (การพ้องรูป)</li>
</ol>

## กฏการตั้งชื่อ
<ul>
  <li>Class -> ตัวแรกพิมใหญ๋เสมอ ex.MyClass, User</li>
  <li>Object -> ตัวเล็กหมด</li>
  <li>Property -> ตัวพิมพ์เล็ก</li>
</ul>

## Constructor
ฟังก์ชันที่จะถูกเรียกตอนสร้างวัตถุ
<ol>
  <li>Default Constructor -> Constructor เริ่มต้นที่มีอยู่ในทุก Class</li>
  <li>Parameterized Constructor -> Constructor ที่สามารถส่ง parameter เข้าไปทำงานได้</li>
</ol>

## Method
การสร้าง Function ใน Class

---

## Encapsulation
เป็นกระบวนการซ่อนรายละเอียดการทำงานและข้อมูลไว้ภายใน ไม่ให้ภายนอกสามารถมองเห็นและเปลี่ยนแปลงข้อมูลภายในได้ เพื่อเป็นการสร้างความปลอดภัยให้แก่ข้อมูล
### Access Modifier
<ul>
  <li>Public -> ใครเข้าถึงก็ได้</li>
  <li>Protected -> เข้าถึงได้เฉพาะ class ที่สืบทอดเท่านั้น (_sign)</li>
  <li>Private -> มีแต่คลาสของตัวมันเองที่เข้าถึงได้(#sign)</li>
</ul>

## Accessor
คำสั่งช่วยในการจัดการ Property ได้ง่ายมากยื่งขึ้น โดยสามารถทำหนดได้ว่าต้องการอยากทำงานกับ Property ใด
<ul>
  <li>Get</li>
  <li>Set</li>
</ul>

## Static
<ul>
  <li><strong>Static Property</strong></li>
    <p>
      คือ Property ที่สามารถเรียกใช้งานได้โดยตรง ไม่ต้องเรียกผ่าน Obj
    </p>
  <li><strong>Static Method</strong></li>
    <p>
      คือ Method ที่สามารถเรียกใช้งานได้โดยตรง ไม่ต้องเรียกผ่าน Obj
    </p>
</ul>

> Static method สามารถใช้ได้แต่กับ Static property หรือ method เหมือนกันเท่านั้น

---

## Inheritance
คือ การสร้างสิ่งใหม่ด้วยการสืบทอด คุณสมบัติจากสิ่งที่มีอยู่เดิมแล้ว
<ul>
  <li><strong>Super class</strong></li>
  <p>Ex. User</p>
  <li><strong>Sub class</strong></li>
  <p>Ex. Teacher, Student</p>
</ul>

> 1 Class สามารถสืบทอดได้แค่ Class เดียวเท่านั้น

### Super 
เป็นคำสั่งเพื่อเรียกใช้งานคุณสมบัติต่างๆที่อยู่ในคลาสแม่

--- 

## Polymophism
คือ การกำหนดกระบวนการทำงานได้หลายรูปแบบโดยเพิ่มเติมกระบวนการทำงานจากสิ่งเดิมที่มีอยู่แล้ว (การทำ Overriding Method)