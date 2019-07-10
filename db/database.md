# Database SQL statements here

**Example**

```sql
    select * from users
```

TABLE SCHEMAS

**USERS**
<li>id</li>
<li>name</li>
<li>email</li>
<li>password</li>
<li>profile url</li>



**SERVICE PLANS**
<li>id</li>
<li>name</li>
<li>description</li>
<li>date</li>
<li>time</li>
<li>frequency</li>



**SONGS**
<li>id</li>
<li>name</li>
<li>beats per minute</li>
<li>meter</li>
<li>key name</li>
<li>starting key</li>
<li>ending key</li>
<li>themes</li>
<li>author</li>
<li>lyrics</li>
<li>type</li>
<li>speed</li>
<li>style</li>
<li>length</li>



**SONG NOTES**
<li>id</li>
<li>song id REFERENCE</li>
<li>user id REFERENCE</li>
<li>note</li>



**TEAMS**
<li>id</li>
<li>name</li>
<li> service id REFERENCE </li>
<li> user id REFERENCE </li>



**INSTRUMENT/ROLE ASSIGNMENT**
<li> id</li>
<li> service id REFERENCE</li>
<li> user id REFERENCE</li>
<li> instrument/role</li>



**BLACKOUTS**
<li> id</li>
<li> user id REFERENCE</li>
<li> start date</li>
<li> end date</li>
