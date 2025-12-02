import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Получение списка активных преподавателей школы медиации
    Args: event - dict с httpMethod
          context - объект с request_id, function_name
    Returns: HTTP response с JSON списком преподавателей
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Database connection not configured'}),
            'isBase64Encoded': False
        }
    
    conn = psycopg2.connect(database_url)
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT id, name, position, experience, image_url, bio, 
               specialization, years_of_practice, successful_cases, display_order
        FROM teachers
        WHERE is_active = true
        ORDER BY display_order ASC
    ''')
    
    rows = cursor.fetchall()
    
    teachers = []
    for row in rows:
        teacher = {
            'id': row[0],
            'name': row[1],
            'position': row[2],
            'experience': row[3],
            'image': row[4],
            'bio': row[5],
            'specialization': row[6],
            'yearsOfPractice': row[7],
            'successfulCases': row[8],
            'displayOrder': row[9]
        }
        teachers.append(teacher)
    
    cursor.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'teachers': teachers}),
        'isBase64Encoded': False
    }