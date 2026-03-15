
CREATE POLICY "Public read testimonials" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'testimonials');
CREATE POLICY "Public read gallery" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'gallery');
CREATE POLICY "Auth upload testimonials" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'testimonials');
CREATE POLICY "Auth upload gallery" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'gallery');
CREATE POLICY "Auth delete testimonials" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'testimonials');
CREATE POLICY "Auth delete gallery" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'gallery');
