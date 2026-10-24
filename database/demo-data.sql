-- Optional fictional records for local UI testing only.
-- Apply after campusconnect.sql. Re-running this file does not duplicate rows.

INSERT INTO public.institutes (name, city, email, applied_on, status)
SELECT 'Cedar Valley Institute', 'Pune, Maharashtra', 'admissions@cedarvalley.test', CURRENT_DATE - 2, 'Pending'
WHERE NOT EXISTS (SELECT 1 FROM public.institutes WHERE email = 'admissions@cedarvalley.test');

INSERT INTO public.institutes (name, city, email, applied_on, status)
SELECT 'Northstar Polytechnic', 'Jaipur, Rajasthan', 'office@northstarpoly.test', CURRENT_DATE - 8, 'Approved'
WHERE NOT EXISTS (SELECT 1 FROM public.institutes WHERE email = 'office@northstarpoly.test');

INSERT INTO public.institutes (name, city, email, applied_on, status)
SELECT 'Harborview College', 'Kochi, Kerala', 'hello@harborview.test', CURRENT_DATE - 14, 'Rejected'
WHERE NOT EXISTS (SELECT 1 FROM public.institutes WHERE email = 'hello@harborview.test');

INSERT INTO public.institutes (name, city, email, applied_on, status)
SELECT 'Juniper School of Design', 'Ahmedabad, Gujarat', 'contact@juniperdesign.test', CURRENT_DATE - 5, 'Approved'
WHERE NOT EXISTS (SELECT 1 FROM public.institutes WHERE email = 'contact@juniperdesign.test');

INSERT INTO public.user_accounts (name, email, joined_on, role, status, last_active_label)
VALUES ('Mira Nair', 'mira.nair@student.test', CURRENT_DATE - 1, 'Student', 'Active', '5 minutes ago'),
       ('Dev Malhotra', 'dev.malhotra@student.test', CURRENT_DATE - 4, 'Student', 'Active', '1 hour ago'),
       ('Asha Menon', 'asha@cedarvalley.test', CURRENT_DATE - 6, 'Institute staff', 'Active', 'Today'),
       ('Nikhil Bose', 'nikhil.bose@student.test', CURRENT_DATE - 12, 'Student', 'Suspended', '1 week ago'),
       ('Tara Iyer', 'tara@juniperdesign.test', CURRENT_DATE - 3, 'Institute staff', 'Active', 'Yesterday')
ON CONFLICT (email) DO NOTHING;

INSERT INTO public.posts (title, institute_id, post_type, status, published_on, likes_count, comments_count)
SELECT 'Applications open for the winter term', i.id, 'Announcement', 'Published', CURRENT_DATE - 1, 38, 7
FROM public.institutes i WHERE i.email = 'admissions@cedarvalley.test'
AND NOT EXISTS (SELECT 1 FROM public.posts p WHERE p.title = 'Applications open for the winter term' AND p.institute_id = i.id);

INSERT INTO public.posts (title, institute_id, post_type, status, published_on, likes_count, comments_count)
SELECT 'Robotics club showcase', i.id, 'Event', 'Published', CURRENT_DATE - 3, 64, 12
FROM public.institutes i WHERE i.email = 'office@northstarpoly.test'
AND NOT EXISTS (SELECT 1 FROM public.posts p WHERE p.title = 'Robotics club showcase' AND p.institute_id = i.id);

INSERT INTO public.posts (title, institute_id, post_type, status, published_on, likes_count, comments_count)
SELECT 'Design portfolio workshop', i.id, 'Event', 'Hidden', CURRENT_DATE - 6, 21, 4
FROM public.institutes i WHERE i.email = 'contact@juniperdesign.test'
AND NOT EXISTS (SELECT 1 FROM public.posts p WHERE p.title = 'Design portfolio workshop' AND p.institute_id = i.id);

INSERT INTO public.posts (title, institute_id, post_type, status, published_on, likes_count, comments_count)
SELECT 'Campus placement preparation session', i.id, 'Placement', 'Published', CURRENT_DATE - 10, 52, 9
FROM public.institutes i WHERE i.email = 'office@northstarpoly.test'
AND NOT EXISTS (SELECT 1 FROM public.posts p WHERE p.title = 'Campus placement preparation session' AND p.institute_id = i.id);

INSERT INTO public.reports (title, snippet, reporter_name, reported_type, status, created_on, reason)
SELECT 'Broken registration link', 'Event · Robotics club showcase', 'Mira Nair', 'Post', 'Open', CURRENT_DATE - 1, 'Broken link'
WHERE NOT EXISTS (SELECT 1 FROM public.reports WHERE title = 'Broken registration link' AND reporter_name = 'Mira Nair');

INSERT INTO public.reports (title, snippet, reporter_name, reported_type, status, created_on, reason)
SELECT 'Spam in event comments', 'Comment thread · Robotics club showcase', 'Dev Malhotra', 'Comment', 'Reviewing', CURRENT_DATE - 2, 'Spam'
WHERE NOT EXISTS (SELECT 1 FROM public.reports WHERE title = 'Spam in event comments' AND reporter_name = 'Dev Malhotra');

INSERT INTO public.reports (title, snippet, reporter_name, reported_type, status, created_on, reason)
SELECT 'Incorrect institute contact details', 'Institute profile · Harborview College', 'Mira Nair', 'Institute', 'Resolved', CURRENT_DATE - 4, 'Incorrect information'
WHERE NOT EXISTS (SELECT 1 FROM public.reports WHERE title = 'Incorrect institute contact details' AND reporter_name = 'Mira Nair');

INSERT INTO public.reports (title, snippet, reporter_name, reported_type, status, created_on, reason)
SELECT 'Duplicate account report', 'Profile · nikhil.bose@student.test', 'Tara Iyer', 'User', 'Dismissed', CURRENT_DATE - 6, 'No policy violation found'
WHERE NOT EXISTS (SELECT 1 FROM public.reports WHERE title = 'Duplicate account report' AND reporter_name = 'Tara Iyer');
