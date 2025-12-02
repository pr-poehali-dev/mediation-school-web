CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    experience TEXT NOT NULL,
    image_url TEXT,
    bio TEXT,
    specialization VARCHAR(255),
    years_of_practice INTEGER,
    successful_cases INTEGER,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO teachers (name, position, experience, image_url, specialization, years_of_practice, successful_cases, display_order) 
VALUES 
    ('Анна Петрова', 'Руководитель программы', 'Более 15 лет практики в медиации, аккредитованный медиатор', '👩‍🏫', 'Общая медиация', 15, NULL, 1),
    ('Михаил Соколов', 'Эксперт по бизнес-медиации', '12 лет опыта, более 300 успешных кейсов', '👨‍💼', 'Бизнес-медиация', 12, 300, 2),
    ('Елена Волкова', 'Специалист по семейной медиации', 'Психолог, медиатор, 10 лет практики', '👩‍⚕️', 'Семейная медиация', 10, NULL, 3);

COMMENT ON TABLE teachers IS 'Преподаватели онлайн-школы медиации';
COMMENT ON COLUMN teachers.id IS 'Уникальный идентификатор преподавателя';
COMMENT ON COLUMN teachers.name IS 'ФИО преподавателя';
COMMENT ON COLUMN teachers.position IS 'Должность/роль';
COMMENT ON COLUMN teachers.experience IS 'Описание опыта работы';
COMMENT ON COLUMN teachers.image_url IS 'URL изображения или эмодзи';
COMMENT ON COLUMN teachers.bio IS 'Подробная биография (опционально)';
COMMENT ON COLUMN teachers.specialization IS 'Специализация медиатора';
COMMENT ON COLUMN teachers.years_of_practice IS 'Количество лет практики';
COMMENT ON COLUMN teachers.successful_cases IS 'Количество успешных кейсов';
COMMENT ON COLUMN teachers.display_order IS 'Порядок отображения на сайте';
COMMENT ON COLUMN teachers.is_active IS 'Активен ли преподаватель (отображать на сайте)';
COMMENT ON COLUMN teachers.created_at IS 'Дата создания записи';
COMMENT ON COLUMN teachers.updated_at IS 'Дата последнего обновления';