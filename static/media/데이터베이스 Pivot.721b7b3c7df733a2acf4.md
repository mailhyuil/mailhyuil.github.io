# 데이터베이스 Pivot

- mySQL
```
SELECT sc_stnum,
   SUM(IF(sc_sbcode = 'SB001', sc_score, 0)) as 국어,
    SUM(IF(sc_sbcode = 'SB002', sc_score, 0)) as 데이터베이스,
    SUM(IF(sc_sbcode = 'SB003', sc_score, 0)) as 미술,
    SUM(IF(sc_sbcode = 'SB004', sc_score, 0)) as 소프트웨어공학,
    SUM(IF(sc_sbcode = 'SB005', sc_score, 0)) as 수학,
    SUM(IF(sc_sbcode = 'SB006', sc_score, 0)) as 영어영문,
    SUM(IF(sc_sbcode = 'SB007', sc_score, 0)) as 음악
FROM tbl_score
   left join tbl_student
    on sc_stnum = st_num
GROUP BY sc_stnum, st_name;
```

- 오라클, mySQL
```
SELECT sc_stnum,
    SUM(CASE WHEN sc_sbcode = 'SB001' THEN sc_score ELSE 0 END) as 국어,
    SUM(CASE WHEN sc_sbcode = 'SB002' THEN sc_score ELSE 0 END) as 데이터베이스,
    SUM(CASE WHEN sc_sbcode = 'SB003' THEN sc_score ELSE 0 END) as 미술,
    SUM(CASE WHEN sc_sbcode = 'SB004' THEN sc_score ELSE 0 END) as 소프트웨어공학,
    SUM(CASE WHEN sc_sbcode = 'SB005' THEN sc_score ELSE 0 END) as 수학,
    SUM(CASE WHEN sc_sbcode = 'SB006' THEN sc_score ELSE 0 END) as 영어영문,
    SUM(CASE WHEN sc_sbcode = 'SB007' THEN sc_score ELSE 0 END) as 음악
FROM tbl_score
   left join tbl_student
    on sc_stnum = st_num
GROUP BY sc_stnum, st_name;
```