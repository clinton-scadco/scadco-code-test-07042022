SELECT DATEPART(wk, dbo.AT_attendance.atdate) AS weeknr, dbo.GT_table.gtdesc, COUNT(*) AS Absent, GT_table_1.gtdesc AS Class  
FROM dbo.AT_attendance INNER JOIN  
                        dbo.ST_students ON dbo.AT_attendance.atstudentcode = dbo.ST_students.pmpupilno INNER JOIN  
                        dbo.GT_table ON dbo.ST_students.pmsex = dbo.GT_table.gtcode INNER JOIN  
                        dbo.GT_table AS GT_table_1 ON dbo.ST_students.pmstd = GT_table_1.gtcode  
GROUP BY DATEPART(wk, dbo.AT_attendance.atdate), dbo.GT_table.gtdesc, GT_table_1.gtdesc) AS tbl1 