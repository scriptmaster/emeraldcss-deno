push-emerald:
	cd repos/emeraldcss-deno/ && 
	git add .
	git commit -am "Emerald CSS v2"
	git push
	@echo "📁 Copying CSS files to static directory..."
	@echo "✅ Completed preview, continuing with publish..."
