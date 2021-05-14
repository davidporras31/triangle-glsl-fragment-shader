float make_line(vec2 black , vec2 wihte) 
{
    return step(float(length(black)<length(wihte)), 0.);
}
vec2 symmetry_central(vec2 center ,vec2 point)
{
    vec2 ret;
    ret.x = 2. * center.x - point.x;
    ret.y = 2. * center.y - point.y;
    return ret;
}
float reverse(float num)
{
    if(num >= 0.5)
    {
        num = 0.;
    }
    else
    {
        num = 1.;
    }
    return num;
}

float draw_triangle(vec2 point1, vec2 point2, vec2 point3) 
{
    float ret = 0.;
    vec2 center;
    center.x = (point1.x + point2.x + point3.x) / 3.;
    center.y = (point1.y + point2.y + point3.y) / 3.;
    
    ret += make_line(center, symmetry_central(point1,center));
    ret += make_line(center, symmetry_central(point2,center));
    ret += make_line(center, symmetry_central(point3,center));
    return reverse(ret);
}
vec4 draw_triangle_at(vec2 act_coord, vec2 point1, vec2 point2, vec2 point3) 
{
    return vec4(vec3(draw_triangle(act_coord-point1,act_coord-point2,act_coord-point3)), 1.0);
}
