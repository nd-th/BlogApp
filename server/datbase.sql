--  CREATE DATABASE blog;
-- CREATE DATABASE


-- CREATE TABLE posts(id serial primary key, title varchar(500), content varchar(7000), summary varchar(4000), sentiment varchar(50));
-- CREATE TABLE



--  List of relations
--  Schema | Name  | Type  |  Owner   
-- --------+-------+-------+----------
--  public | posts | table | tpl822_6
-- (1 row)


-- Table "public.posts"
--   Column   |          Type           | Collation | Nullable |              Default              
-- -----------+-------------------------+-----------+----------+-----------------------------------
--  id        | integer                 |           | not null | nextval('posts_id_seq'::regclass)
--  title     | character varying(500)  |           |          | 
--  content   | character varying(7000) |           |          | 
--  summary   | character varying(4000) |           |          | 
--  sentiment | character varying(50)   |           |          | 
-- Indexes:
--     "posts_pkey" PRIMARY KEY, btree (id)





--  id |                     title                      |                                                                                                                                                                                        content                                                                                                                                                                                        | summary | sentiment 
-- ----+------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------+-----------
--   1 | The Power of AI in Everyday Life               | Artificial Intelligence (AI) is transforming the world. It has moved beyond science fiction and is now integrated into daily life, shaping various industries. AI is found in everything from personalized recommendations on streaming services to autonomous vehicles. Netflix, Amazon, and YouTube use AI to tailor content suggestions, creating a seamless experience for users.+|         | 
--     |                                                | In healthcare, AI improves diagnosis accuracy, helps detect diseases early, and supports doctors in analyzing vast amounts of medical data. Machine learning models can detect patterns in medical records that even experts might overlook, leading to better patient outcomes.                                                                                                     +|         | 
--     |                                                | In transportation, AI powers autonomous vehicles, reducing human error and making roads safer. Public transport systems also benefit from AI by optimizing routes, managing traffic, and predicting infrastructure maintenance.                                                                                                                                                      +|         | 
--     |                                                | Despite its benefits, AI raises ethical concerns, particularly around job displacement and privacy. However, the future of AI is promising, and its continued evolution will likely bring new opportunities in sectors like education and sustainability. AI will help shape a future where technology enhances human lives in more profound ways.                                    |         | 
--   2 | Why Learning to Code is Essential in 2024      | Coding has become a critical skill in the digital age. It’s no longer limited to developers; people in various industries can benefit from knowing how to code. Python, JavaScript, and SQL are widely used in fields like finance, marketing, and design, making coding a versatile and valuable skill.                                                                             +|         | 
--     |                                                | The world is becoming increasingly digital. Businesses, education, and healthcare are all reliant on technology. Understanding how to code can help professionals solve problems, think logically, and stand out in the job market. Coding also fosters creativity and innovation.                                                                                                   +|         | 
--     |                                                | In 2024, demand for coders is growing, especially in sectors like AI, data science, and machine learning. Even outside traditional tech roles, coding knowledge can benefit digital marketers, designers, and entrepreneurs. Platforms like Codecademy and Udemy make coding accessible to beginners, with languages like Python offering a user-friendly starting point.            +|         | 
--     |                                                | Learning to code not only opens doors to job opportunities but also enhances problem-solving skills, making it an essential skill for today’s fast-paced world. The ability to understand and manipulate the digital environment will be crucial for future success.                                                                                                                  |         | 
--   3 | Exploring the Future of Sustainable Technology | Sustainability is becoming increasingly important, and technology is key in driving environmental solutions. From renewable energy to sustainable farming, technology is helping address global challenges. Solar and wind power are becoming more affordable, providing clean energy alternatives to fossil fuels.                                                                  +|         | 
--     |                                                | Electric vehicles (EVs) are also growing in popularity. Companies like Tesla and Ford are investing in EV production, which reduces emissions from the transportation sector. This shift towards electric vehicles is helping reduce our dependence on fossil fuels.                                                                                                                 +|         | 
--     |                                                | Sustainable agriculture is evolving through technological innovations like vertical farming and precision agriculture. These methods use fewer resources and reduce waste, leading to more efficient food production systems.                                                                                                                                                        +|         | 
--     |                                                | However, challenges remain. Scaling sustainable technologies worldwide can be costly, and there are concerns about the environmental impact of manufacturing items like solar panels and batteries. However, advances in green manufacturing and recycling offer solutions to these problems.                                                                                        +|         | 
--     |                                                | As more businesses and consumers embrace sustainable practices, technology will continue to drive the transition towards a greener future, where economic growth aligns with environmental responsibility.                                                                                                                                                                            |         | 
-- (3 rows)
